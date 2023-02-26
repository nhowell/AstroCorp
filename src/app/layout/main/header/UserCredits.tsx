import { CountUp } from "use-count-up";

import { useMyAccountInfo } from "@/spacetraders-api/hooks/my/useMyAccountInfo";
import { creditFormat } from "@/utils/creditFormat";
import { t } from "@/utils/translate";

import { QueryResultHandler } from "../../../common/QueryResultHandler";
import { usePrevious } from "../../../hooks/usePrevious";

import styles from "./UserCredits.module.css";

export function UserCredits() {
	const result = useMyAccountInfo();

	const prevCredits = usePrevious(result.data?.user.credits ?? 0);

	return (
		<div className={styles.credits}>
			<QueryResultHandler queryResult={result} errorText={t("N/A")}>
				{(data) => (
					<CountUp
						key={data.user.credits}
						isCounting
						start={prevCredits}
						duration={0.5}
						end={data.user.credits}
						formatter={creditFormat}
					/>
				)}
			</QueryResultHandler>
		</div>
	);
}
