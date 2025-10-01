import LoginForm from "@/src/components/LoginForm/LoginForm";
import Image from "next/image";
import image from "../../../public/diu.jpg";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Login = () => {
    return (
        <div className="grid min-h-screen lg:grid-cols-2 bg-background text-foreground">

            {/* Left side image (desktop only) */}
            <div className="relative hidden lg:block">
                <Image
                    src={image}
                    alt="Portfolio login background"
                    className="absolute inset-0 h-full w-full object-cover brightness-95 dark:brightness-75"
                />
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

                <div className="absolute bottom-40 left-10 text-white max-w-lg space-y-4">
                    <h2 className="text-4xl font-extrabold drop-shadow-md">
                        Welcome Back
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        Sign in to access the private section of my portfolio,
                        including exclusive case studies, dashboards, and project insights.
                    </p>
                </div>
            </div>

            {/* Right side login form */}
            <div className="flex flex-col justify-center px-6 py-5 sm:px-10 md:px-16 bg-background">
                {/* Logo / Home link */}
                <div className="mb-5 flex justify-center md:justify-start">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-12 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                            <Image src={logo} alt="Logo" fill className="object-cover" />
                        </div>
                        <span className="sr-only">Go to homepage</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            Istiak Ahamed
                        </span>
                    </Link>
                </div>

                {/* Card container */}
                <div className="mx-auto w-full max-w-md">
                    <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
                        <div className="mb-6 text-center space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
                            <p className="text-muted-foreground">
                                Enter your email and password to continue
                            </p>
                        </div>

                        {/* Login form */}
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;