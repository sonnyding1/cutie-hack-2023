import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react"
export default function BoardPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex items-center justify-end h-min-screen w-full border pr-8 pt-10"><UserButton afterSignOutUrl="/"/></div>
            <div className="flex gap-x-3 border w-full h-full">
                <div className="flex flex-col items-center justify-center w-1/2 border">Upload</div>
                <div className="flex flex-col items-center justify-center w-1/2 border">
                    <div className="flex flex-col w-full h-3/4 border  self-start">hi </div>
                    <div className="flex gap-y-2 flex-col border w-full h-1/4">
                        <div className="flex flex-col w-full h-3/4 border pb-3">input</div>
                        <div className="flex flex-col justify-end w-full h-1/4 border"><Button variant="outline"size="icon">
                            <ChevronRight className="h-4 w-4" /></Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}