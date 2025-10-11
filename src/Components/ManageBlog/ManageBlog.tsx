"use client";

import useSWR from "swr";
import { IBlog } from "@/src/type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const ManageBlog = ({ decoded }: { decoded: string }) => {
    const router = useRouter();
    const { data, mutate, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/blog`, fetcher, {
        refreshInterval: 10000,
    });

    if (error) return <div>Error loading blogs</div>;
    if (!data) return <div>Loading...</div>;

    const blogs: IBlog[] = data.data;

    const handleTogglePublish = async (id: number, currentStatus: boolean) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/publish/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${decoded}`,
                },
                body: JSON.stringify({ published: !currentStatus }),
            });
            const result = await res.json();
            if (result.success) {
                toast.success(`Blog ${!currentStatus ? "published" : "unpublished"} successfully`);
                mutate();
            }
        } catch (err) {
            toast.error("Error updating publish status");
            console.log(err);
        }
    };

    const handleUpdate = (id: number) => {
        console.log("Update blog:", id);
        router.push(`/dashboard/updateBlog/${id}`)
    };

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${decoded}`,
                },
            });
            const result = await res.json();
            if (result.success) {
                toast.success("Blog deleted successfully");
                mutate();
            }
        } catch (err) {
            toast.error("Error deleting blog");
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-6">
                    Manage Blogs
                </h1>

                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-md">
                    <Table className="min-w-[600px] w-full">
                        <TableHeader>
                            <TableRow className="bg-gray-100 dark:bg-gray-900">
                                <TableHead className="text-center text-sm sm:text-base">Title</TableHead>
                                <TableHead className="text-center text-sm sm:text-base">Slug</TableHead>
                                <TableHead className="text-center text-sm sm:text-base">Published</TableHead>
                                <TableHead className="text-center text-sm sm:text-base">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {blogs.map((blog) => (
                                <TableRow
                                    key={blog.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <TableCell className="text-center text-xs sm:text-sm break-words">
                                        {blog.title}
                                    </TableCell>

                                    <TableCell className="text-center text-xs sm:text-sm break-words">
                                        {blog.slug}
                                    </TableCell>

                                    <TableCell className="text-center">
                                        <Button
                                            variant={blog.published ? "default" : "destructive"}
                                            size="sm"
                                            className="cursor-pointer text-xs sm:text-sm"
                                            onClick={() => handleTogglePublish(blog.id, blog.published)}
                                        >
                                            {blog.published ? "Published" : "Unpublished"}
                                        </Button>
                                    </TableCell>

                                    <TableCell className="flex flex-col sm:flex-row gap-2 justify-center">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer text-xs sm:text-sm w-full sm:w-auto"
                                            onClick={() => handleUpdate(blog.id)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="cursor-pointer text-xs sm:text-sm w-full sm:w-auto"
                                            onClick={() => handleDelete(blog.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;