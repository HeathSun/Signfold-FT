"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useTheme } from "next-themes";
import { useState } from "react";

const companies = [
  "Afore",
  "Novita", 
  "Phenoml",
  "Qdrant",
  "Composio"
];

export function CompanySelector() {
  const { theme } = useTheme();
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>Demo Company</CardTitle>
          <CardDescription>
            Select a company to follow with Signfold
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid gap-3">
            {companies.map((company) => (
              <Button
                key={company}
                variant={selectedCompany === company ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCompany(company)}
                className="w-full justify-start text-sm"
              >
                {company}
              </Button>
            ))}
          </div>
        </CardContent>
      </MagicCard>
    </Card>
  );
}
