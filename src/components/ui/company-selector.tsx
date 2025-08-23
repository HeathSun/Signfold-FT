"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";

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
    <Card className="relative overflow-hidden max-w-[350px] w-full">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
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
    </Card>
  );
}
