import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer=()=>{
    return (
        <footer className="bg-white shadow-xl py-5 border-gray-200 border-t">
            <MaxWidthWrapper className="">
                <div className="flex flex-col  md:grid md:grid-cols-2 mx-auto">
                    <div className="flex justify-center  md:ml-[5rem] md:justify-start items-center">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} All right reserved 
                        </p>
                    </div>
                    <div>
                        <div className="flex my-2 md:my-0 text-sm md:flex md:flex-row justify-evenly">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Terms
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer;