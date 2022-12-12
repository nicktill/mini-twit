import Link from "next/link"


export default function MustSignIn(){
    return (
        <div className="px-4 py-8 rounded-2xl flex flex-col items-center justify-center w-1/2 mx-auto">
            <Link href="/enter">
             <button className="bg-transparent text-sky-300 outline font-bold py-2 px-4 rounded-full">You must be signed in</button>
            </Link>
        </div>
    )
}


