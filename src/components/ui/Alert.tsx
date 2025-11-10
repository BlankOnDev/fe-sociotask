"use client";

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

type AlertParams = {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};

const alertValueAtom = atom<AlertParams | null>(null);
const alertStateAtom = atom(false);

export const useAlert = (params: AlertParams = {}) => {
    const setAlertValue = useSetAtom(alertValueAtom);
    const setAlertState = useSetAtom(alertStateAtom);

    const show = () => {
        setAlertValue({
            title: params.title,
            message: params.message,
            confirmText: params.confirmText,
            cancelText: params.cancelText,
            onConfirm: params.onConfirm,
            onCancel: params.onCancel,
        });
        setAlertState(true);
    };
    const hide = () => {
        setAlertValue(null);
        setAlertState(false);
    };

    return {
        show,
        hide,
        alertValue: useAtomValue(alertValueAtom),
        alertState: useAtomValue(alertStateAtom),
    };
};

export const AlertDialog = () => {
    const alertValue = useAtomValue(alertValueAtom);
    const [alertState, setAlertState] = useAtom(alertStateAtom);
    return (
        <Dialog.Root
            placement={"center"}
            open={alertState}
            onOpenChange={(details) => setAlertState(details.open)}
            role="alertdialog"
            trapFocus={false}
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>
                                {alertValue?.title || "Alert"}
                            </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>{alertValue?.message || "Are you sure?"}</p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button
                                    variant="outline"
                                    onClick={alertValue?.onCancel}
                                >
                                    {alertValue?.cancelText || "Cancel"}
                                </Button>
                            </Dialog.ActionTrigger>
                            <Button
                                colorPalette="red"
                                onClick={alertValue?.onConfirm}
                            >
                                {alertValue?.confirmText || "Confirm"}
                            </Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton
                                onClick={alertValue?.onCancel}
                                size="sm"
                            />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
