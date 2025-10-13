import { CloseButton, Drawer, Portal } from "@chakra-ui/react";

type DrawerProps = {
    children: React.ReactNode;
    root?: Omit<Drawer.RootProps, "children">;
    trigger?: React.ReactNode;
};

export default function DrawerContainer(props : DrawerProps) {
    const { root, trigger } = props;
    return (
        <Drawer.Root placement="bottom" initialFocusEl={() => null} {...root}>
            {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
            <Portal>
                <Drawer.Backdrop
                    bg={"whiteAlpha.400"}
                    backdropFilter={"blur(4px)"}
                />
                <Drawer.Positioner>
                    <Drawer.Content borderTopRadius={"3xl"}>
                        {props.children}
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
