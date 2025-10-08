import moment from "moment";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function getRemainingDays(endDate: Date | string) {
    const intl = await getTranslations("common");

    const targetDate = moment(endDate);
    const now = moment();

    const daysLeft = targetDate.diff(now, "days");
    const duration = moment.duration(targetDate.diff(now));

    if (daysLeft == 0) {
        return intl("hours-left", { count: duration.hours() });
    } else {
        return intl("days-left", { count: daysLeft });
    }
}

export function useRemainingDays(endDate: Date | string) {
    const intl = useTranslations("common");

    const targetDate = moment(endDate);
    const now = moment();

    const daysLeft = targetDate.diff(now, "days");
    const duration = moment.duration(targetDate.diff(now));

    if (daysLeft == 0) {
        return intl("hours-left", { days: duration.hours() });
    } else if (daysLeft < 0) {
        return "Ended"
    } else {
        return intl("days-left", { days: daysLeft });
    }
}
