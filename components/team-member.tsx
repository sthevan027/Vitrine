import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  skills: string[]
  description: string
}

export default function TeamMember({ name, role, image, skills, description }: TeamMemberProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-deep/80 to-purple-galaxy/80 border border-purple-electric/20 overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <CardTitle className="text-white text-xl">{name}</CardTitle>
            <CardDescription className="text-blue-baby">{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-standard/20 to-purple-electric/20 border border-purple-electric/30 rounded-full text-xs text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-blue-baby line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border border-purple-electric text-white hover:bg-purple-electric/10">
              Ver Perfil
            </Button>
          </DialogTrigger>
          <DialogContent className="card-bg border border-purple-electric/30 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-montserrat">{name}</DialogTitle>
              <DialogDescription className="text-purple-electric">{role}</DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6 py-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-blue-baby">{description}</p>
                <div>
                  <h4 className="text-sm font-medium text-blue-baby mb-2">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-standard/20 to-purple-electric/20 border border-purple-electric/30 rounded-full text-xs text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-baby mb-2">Projetos Destacados</h4>
                  <ul className="space-y-2 text-blue-baby">
                    <li>• Redesenho do portal corporativo XYZ</li>
                    <li>• Aplicativo de gestão para empresa ABC</li>
                    <li>• Sistema de automação para indústria DEF</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-gray-800 pt-4 mt-2">
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-8 w-8 text-blue-baby hover:text-white hover:bg-blue-standard"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
              <Button className="bg-gradient-to-r from-purple-vibrant to-blue-standard text-white hover:opacity-90">
                Entrar em Contato
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
