'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CabinFilters() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex gap-2  p-0 h-auto cursor-pointer bg-transparent rounded-none border border-primary/50">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium"
        >
          All cabins
        </TabsTrigger>
        <TabsTrigger
          value="2-3"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium"
        >
          2-3 guests
        </TabsTrigger>
        <TabsTrigger
          value="4-7"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium"
        >
          4-7 guests
        </TabsTrigger>
        <TabsTrigger
          value="8-12"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium"
        >
          8-12 guests
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
