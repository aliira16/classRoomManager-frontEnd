import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SubjectList = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [SearchDepartment, setSearchDepartment] = useState("all");

  return (
    <ListView>
      <Breadcrumb></Breadcrumb>
      <h1 className="page-title">Subjects</h1>
      <div className="intro-row">
        <p>Quick access to essential metrics and management tools.</p>
        <div className="actions-row">
          <div className="search-field">
            <Search className="search-icon" />
            <Input
              type="text"
              placeholder="Search by name"
              className="pl-10 w-full"
              value={SearchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Select
              value={SearchDepartment}
              onValueChange={setSearchDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Department
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </ListView>
  );
};

export default SubjectList;
