import { Dialog, Drawer, useBreakpointValue } from "@chakra-ui/react";
import DialogContainer from "./Dialog";
import DrawerContainer from "./Drawer";
import { DialogOpenChangeDetails, DrawerOpenChangeDetails } from "@chakra-ui/react";

type DialogWrapperProps = {
    open?: boolean;
    onOpenChange?: (details: DialogOpenChangeDetails | DrawerOpenChangeDetails) => void;
    children: React.ReactNode;
    dialogRoot?: Omit<Dialog.RootProps, "children">;
    drawerRoot?: Omit<Drawer.RootProps, "children">;
    trigger?: React.ReactNode;
};

export default function DialogWrapper(props: DialogWrapperProps) {
    const containerType = useBreakpointValue({
        base: "drawer",
        sm: "dialog",
    });
    return (
        <>
            {containerType === "dialog" ? (
                <DialogContainer
                    root={{ ...props.dialogRoot, open: props.open, onOpenChange: props.onOpenChange }}
                    trigger={props.trigger}
                >
                    {props.children}
                </DialogContainer>
            ) : (
                <DrawerContainer
                    root={{ ...props.drawerRoot, open: props.open, onOpenChange: props.onOpenChange }}
                    trigger={props.trigger}
                >
                    {props.children}
                </DrawerContainer>
            )}
        </>
    );
}
