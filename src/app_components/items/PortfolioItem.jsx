import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";


function PortfolioItem({title, description, stack, github, link, img}) {
    return (
        <Card className="mb-4 md:me-4 flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-[350px] w-full flex flex-col h-full">
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="flex flex-wrap">
                        {stack.map((stackItem, index) => {
                            return (
                            <Badge key={index} className="me-2 mb-2">{stackItem}</Badge>
                            );
                        })}
                    </CardDescription>
                </CardHeader>

                <CardContent>{description.split('\n').map((line, index) => {
                    return (
                        <p className="mb-2" key={index}>{line}</p>
                    )
                })}</CardContent>

                <CardFooter className="space-x-4 mt-auto">
                    {github && (
                        <a href={github}>
                            <GitHubLogoIcon className="size-5"/>
                        </a>
                    )}

                    {link && (
                        <a href={link}>
                            <Link1Icon className="size-5"/>
                        </a>
                    )}
                </CardFooter>
            </div>
            <div className="w-[250px] mx-auto my-auto">
                <img src={img} alt="" className="p-6 hover:p-4 transition-all duration-150 object-cover"/>
            </div>
        </Card>
    )
}

export default PortfolioItem;