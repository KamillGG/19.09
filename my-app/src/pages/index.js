import SimpleForm from "@/components/SimpleForm";
import Display from "@/components/ConditionalDisplay";
import ListWithObjects from "@/components/ListWithObjects";
export default function main(){
    const Arr = [
        {name:"ex. name", value:"ex. value"}
    ]
    return(
        <>
        <SimpleForm label={"cokolwiek"} placeholder={"wpisz odpowiedz"}/>
        <Display isVisible={false}/>
        <ListWithObjects items={Arr}/>
        </>
    )
}