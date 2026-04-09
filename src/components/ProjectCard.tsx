import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/research/${project.slug}`}
      className="group block relative overflow-hidden rounded-xl no-underline min-h-[220px] md:min-h-[280px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-white/85 text-sm md:text-base max-w-2xl leading-relaxed">
          {project.summary}
        </p>
      </div>
      {/* Image credit */}
      <span className="absolute top-3 right-3 text-[10px] text-white/50 z-10">
        Photo by {project.imageCredit.name} / Unsplash
      </span>
      {/* Hover lift shadow */}
      <div className="absolute inset-0 rounded-xl transition-shadow duration-300 group-hover:shadow-2xl" />
    </Link>
  );
}
