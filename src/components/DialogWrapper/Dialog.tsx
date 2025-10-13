import { CloseButton, Dialog, Portal } from "@chakra-ui/react";

type DialogProps = {
    children: React.ReactNode;
    root?: Omit<Dialog.RootProps, "children">;
    trigger?: React.ReactNode;
    contentProps?: Omit<Dialog.ContentProps, "children">;
};

export default function DialogContainer(props: DialogProps) {
    const { root, trigger, contentProps } = props;

    return (
        <Dialog.Root placement={"center"} initialFocusEl={() => null} {...root}>
            {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
            <Portal>
                <Dialog.Backdrop
                    bg={"whiteAlpha.400"}
                    backdropFilter={"blur(4px)"}
                />
                <Dialog.Positioner>
                    <Dialog.Content borderRadius={"2xl"} {...contentProps}>
                        {props.children}
                        <Dialog.CloseTrigger top="0" insetEnd="-12" asChild>
                            <CloseButton
                                bg={"white"}
                                shadow={"md"}
                                _hover={{ bg: "gray.100" }}
                                size="sm"
                                borderRadius={"lg"}
                            />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
