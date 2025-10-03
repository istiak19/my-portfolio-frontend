"use client";

import { IBlog } from "@/src/type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

interface ManageBlogProps {
    blogs: IBlog[];
}

const ManageBlog = ({ blogs }: ManageBlogProps) => {

    const handleTogglePublish = async (id: number, currentStatus: boolean) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/blog/publish/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ published: !currentStatus }),
                }
            );

            const data = await res.json();
            if (data.success) {
                toast.success(`Blog ${!currentStatus ? "published" : "unpublished"} successfully`
                );
                console.log(data.data);
            }
        } catch (error) {
            toast.error("Error updating publish status");
            console.log(error);
        }
    };

    const handleUpdate = (id: number) => {
        toast("✏️ Edit blog modal খুলবে এখানে!");
        console.log("Update blog:", id);
    };


    const handleDelete = (id: number) => {
        console.log("Delete blog:", id);
        // এখানে API call করে blog delete করতে পারো
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Manage Blogs</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Title</TableHead>
                        <TableHead className="text-center">Slug</TableHead>
                        <TableHead className="text-center">Published</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow key={blog.id}>
                            <TableCell>{blog.title}</TableCell>
                            <TableCell>{blog.slug}</TableCell>
                            <TableCell className="text-center">
                                <Button
                                    variant={blog.published ? "default" : "destructive"}
                                    size="sm"
                                    className="cursor-pointer"
                                    onClick={() => handleTogglePublish(blog.id, blog.published)}
                                >
                                    {blog.published ? "Published" : "Unpublished"}
                                </Button>
                            </TableCell>
                            <TableCell className="flex gap-2 justify-center">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer"
                                    onClick={() => handleUpdate(blog.id)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    className="cursor-pointer"
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
    );
};

export default ManageBlog;