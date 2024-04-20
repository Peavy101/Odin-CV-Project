export default function CVDisplay(FormData) 
{
    return(
        <>
            <div>
                <p>Hello world</p>
                <p>{FormData.name}</p>
                <p>{FormData.email}</p>
                <p>{FormData.phoneNumber}</p>
            </div>
        </>
    )
    
}

