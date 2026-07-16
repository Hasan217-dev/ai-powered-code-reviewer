import { requireAuth } from "@/features/auth/actions";
import React from "react";


export default async function protectedLayout({children}:{children : React.ReactNode}) {
    await requireAuth()

    return(
        <div className="min-h-svh">
            {children}
        </div>
    )
}