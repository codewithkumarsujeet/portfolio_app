import React from "react";
import Card from "../Ui/card";
import { skillData } from "@/data/skill";
import Tooltip from "../Ui/tooltip";

export default function SkillCard() {
  return (
    <Card title="My Tech Skill">
      <div className="flex flex-col gap-6 mt-6 justify-between">
        {skillData.map((tech, i) => (
          <div
            key={i}
            className="grid grid-cols-2 items-center gap-[10px]"
            style={{ gridTemplateColumns: "50px, 1fr" }}
          >
            {/* Skill group name  */}
            <div className="flex-none h-auto break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            {/* tooltip  */}
            <div className="flex gap-4">
              {tech.skill.map((t) => (
                <Tooltip
                  key={t.id}
                  title={t.title}
                  image={t.image}
                  bgColor={t.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
