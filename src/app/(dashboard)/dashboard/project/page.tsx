"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { toast } from "react-hot-toast";
import dynamic from "next/dynamic";

// Zod schema
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

// Dynamic client-only image upload
const SingleImageUpload = dynamic(() => import("@/src/components/singleImageUpload"), { ssr: false });

export default function ProjectForm() {
    const [image, setImage] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<ProjectFormValues>({
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
        if (!image) {
            toast.error("Project image is required");
            return;
        }

        const formData = new FormData();
        formData.append("data", JSON.stringify({ ...values, features: values.features }));
        formData.append("file", image);

        try {
            setIsSubmitting(true);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/create-project`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Project uploaded successfully!");
                reset();
                setImage(null);
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
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
                Upload Project
            </h2>

            {/* Section: Title & Technologies */}
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

            {/* Section: Description */}
            <div>
                <Label htmlFor="description">Description</Label>
                <Input id="description" {...register("description")} className="mt-1 h-24" />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Section: Challenges & Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="challenges">Challenges</Label>
                    <Input id="challenges" {...register("challenges")} className="mt-1 h-20" />
                </div>
                <div>
                    <Label htmlFor="improvements">Improvements</Label>
                    <Input id="improvements" {...register("improvements")} className="mt-1 h-20" />
                </div>
            </div>

            {/* Section: Links */}
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

            {/* Section: Features */}
            <div>
                <Label>Project Features</Label>
                <div className="space-y-2 mt-2">
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-2">
                            <Input
                                {...register(`features.${index}` as const)}
                                placeholder={`Feature ${index + 1}`}
                            />
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
                <Button type="button" className="mt-3" onClick={() => append("")}>
                    Add Feature
                </Button>
            </div>

            {/* Section: Image Upload */}
            <div>
                <Label htmlFor="image">Project Image</Label>
                <Input type="file" className="mt-2" accept="image/*" {...register("image")} />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message as string}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-4 py-3 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Uploading..." : "Upload Project"}
            </Button>
        </form>
    );
}