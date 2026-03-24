import Image from "next/image";

export default async function not_Found(){
    return(
        <div>
            <Image src="" alt="page has not been found"/>
            <h2>user not found</h2>
        </div>
    );
}