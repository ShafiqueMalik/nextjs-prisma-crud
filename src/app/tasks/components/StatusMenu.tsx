import React, { useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { updateStatusAction } from '../actions';
import { StatusesType } from '@/shared/types/models';
import { cn } from '@/lib/utils';

export default function StatusMenu({ status, id }: { status: StatusesType; id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = async (status: StatusesType) => {
    startTransition(async () => {
      try {
        const response = await updateStatusAction(status, id);
        console.log('status chagned', response);
      } catch (err) {
        console.error(err);
      }
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            ` bg-gray-500 text-white flex cursor-pointer items-center rounded-full px-3 py-1 text-sm  w-fit`,
            status === 'INPROGRESS' && 'bg-blue-700',
            status === 'DONE' && 'bg-green-700'
          )}
        >
          {isPending ? (
            'Updating...'
          ) : (
            <>
              <span className="">
                {status.slice(0, 1)}
                {status.slice(1).toLowerCase()}
              </span>
              <ChevronDownIcon size={16} />
              <span className="sr-only">Open menu</span>
            </>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-bold">Change Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleStatusChange('TODO')}>Todo</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusChange('INPROGRESS')}>
          Inprogress
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusChange('DONE')}>Done</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
