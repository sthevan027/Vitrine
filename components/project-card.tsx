import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
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

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  client: string
  year: string
  tags: string[]
  link?: string
  gallery?: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  client,
  year,
  tags,
  link,
  gallery = [],
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border border-purple-electric/20 bg-gradient-to-br from-blue-deep/80 to-purple-galaxy/80 transition-all hover:border-purple-electric/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-electric/20 duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <Badge className="absolute left-3 top-3 bg-purple-vibrant text-white hover:bg-purple-electric">
          {category}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-xl text-white">{title}</CardTitle>
        <CardDescription className="line-clamp-1 text-blue-baby">{client}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-2 text-sm text-blue-baby">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="border-purple-electric/30 text-xs text-white">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="border-purple-electric/30 text-xs text-white">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="gap-1 text-white hover:bg-purple-electric/10 hover:text-blue-baby"
            >
              Detalhes
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl border-purple-electric/30 card-bg">
            <DialogHeader>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription className="text-purple-electric">
                {client} • {year}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-blue-baby">{description}</p>
                <div>
                  <h4 className="mb-2 text-sm font-medium text-blue-baby">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-purple-electric/30 text-xs text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {gallery.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-blue-baby">Galeria</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {gallery.map((img, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-md">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${title} - imagem ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {link && (
              <div className="flex justify-end border-t border-gray-800 pt-4">
                <Button
                  className="bg-gradient-to-r from-purple-vibrant to-blue-standard text-white hover:opacity-90"
                  asChild
                >
                  <Link href={link} target="_blank" className="flex items-center gap-1">
                    Visitar Projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
