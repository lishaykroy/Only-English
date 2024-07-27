"use client";

import { 
    AlertDialog , AlertDialogAction , AlertDialogCancel , AlertDialogContent , AlertDialogDescription , 
    AlertDialogFooter , AlertDialogHeader , AlertDialogTitle , AlertDialogTrigger
 } from "@/components/ui/alert-dialog"

 interface ConfrimModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
 };

 export const ConfrimModal = ({
    children,
    onConfirm,
 }: ConfrimModalProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action can not be undone .
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
 };