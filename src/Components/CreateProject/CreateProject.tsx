"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { toast } from "react-hot-toast";
import { BackgroundBeams } from "../ui/BackgroundBeams/background-beams";

const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    technologies: z.string().min(1, "Technologies are required"),
    description: z.string().min(1, "Description is required"),
    challenges: z.string().optional(),
    improvements: z.string().optional(),
    serverLink: z.string().url("Invalid URL").optional(),
    clientLink: z.string().url("Invalid URL").optional(),
    liveLink: z.string().url("Invalid URL").optional(),
    features: z.array(z.string().min(1, "Feature cannot be empty")).min(1, "Add at least one feature"),
    image: z
        .any()
        .refine((files) => files?.length > 0, "Project image is required")
        .refine((files) => files?.[0]?.type.startsWith("image/"), "File must be an image"),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const CreateProject = ({ decoded }: { decoded: string }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            technologies: "",
            description: "",
            challenges: "",
            improvements: "",
            serverLink: "",
            clientLink: "",
            liveLink: "",
            features: [""],
            image: undefined,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "features",
    });

    const onSubmit = async (values: ProjectFormValues) => {
        if (!values.image || values.image.length === 0) {
            toast.error("Project image is required");
            return;
        }

        const formData = new FormData();
        formData.append("file", values.image[0]);
        const { image, ...rest } = values;
        formData.append("data", JSON.stringify(rest));

        try {
            setIsSubmitting(true);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/create-project`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${decoded}`,
                },
                body: formData,
                credentials: "include",
            });

            const text = await res.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (err) {
                console.error("Server response is not JSON:", text);
                toast.error("Server returned invalid response");
                return;
            }

            if (res.ok) {
                toast.success("Project uploaded successfully!");
                reset();
            } else if (res.status === 401) {
                toast.error("Unauthorized! Please login first.");
            } else {
                toast.error(data.message || "Failed to upload project");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="container mx-auto bg-white dark:bg-black p-8 rounded-2xl shadow-lg space-y-8"
        >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-4">
                Upload Project
            </h2>

            {/* Title & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" {...register("title")} className="mt-1" />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div>
                    <Label htmlFor="technologies">Technologies</Label>
                    <Input id="technologies" {...register("technologies")} className="mt-1" />
                    {errors.technologies && <p className="text-red-500 text-sm mt-1">{errors.technologies.message}</p>}
                </div>
            </div>

            {/* Description */}
            <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                    id="description"
                    {...register("description")}
                    className="mt-1 w-full border rounded-md p-2 h-24"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Challenges & Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="challenges">Challenges</Label>
                    <textarea id="challenges" {...register("challenges")} className="mt-1 w-full border rounded-md p-2 h-20" />
                </div>
                <div>
                    <Label htmlFor="improvements">Improvements</Label>
                    <textarea id="improvements" {...register("improvements")} className="mt-1 w-full border rounded-md p-2 h-20" />
                </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <Label htmlFor="serverLink">Server Repo</Label>
                    <Input id="serverLink" {...register("serverLink")} className="mt-1" />
                    {errors.serverLink && <p className="text-red-500 text-sm mt-1">{errors.serverLink.message}</p>}
                </div>
                <div>
                    <Label htmlFor="clientLink">Client Repo</Label>
                    <Input id="clientLink" {...register("clientLink")} className="mt-1" />
                    {errors.clientLink && <p className="text-red-500 text-sm mt-1">{errors.clientLink.message}</p>}
                </div>
                <div>
                    <Label htmlFor="liveLink">Live Demo</Label>
                    <Input id="liveLink" {...register("liveLink")} className="mt-1" />
                    {errors.liveLink && <p className="text-red-500 text-sm mt-1">{errors.liveLink.message}</p>}
                </div>
            </div>

            {/* Features */}
            <div>
                <Label>Project Features</Label>
                <div className="space-y-2 mt-2">
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-2">
                            <Input {...register(`features.${index}` as const)} placeholder={`Feature ${index + 1}`} />
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={() => remove(index)}
                                className="h-10"
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </div>
                {errors.features && <p className="text-red-500 text-sm mt-1">{errors.features.message as string}</p>}
                <Button type="button" onClick={() => append("")} className="group mt-3 cursor-pointer relative inline-flex items-center justify-center gap-2 px-6 py-2 font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg">
                    Add Feature
                </Button>
            </div>

            {/* Image Upload */}
            <div>
                <Label htmlFor="image">Project Image</Label>
                <Input type="file" className="mt-2" accept="image/*" {...register("image")} />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message as string}</p>}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 w-full font-semibold text-xl cursor-pointer border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Uploading..." : "Upload Project"}
            </Button>
            <BackgroundBeams />
        </form>
    );
};

export default CreateProject;