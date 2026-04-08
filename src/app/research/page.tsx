import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Research — Aidan Herderschee",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <h1
        className="text-3xl font-bold mb-3"
        style={{ color: "var(--foreground)" }}
      >
        Research
      </h1>
      <p className="mb-12 max-w-2xl" style={{ color: "var(--muted)" }}>
        My research develops precise, testable predictions for experiments in
        gravitational physics, using tools from quantum field theory and string
        theory.
      </p>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
