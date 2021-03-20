import { ReactElement } from "react";
import { t } from "../../helpers/translate";
import { ShipFlightStatus } from "./ShipFlightStatus";

interface IOwnProps {
	location: string | undefined;
	flightPlanId: string | undefined;
}

export function ShipStatus(props: IOwnProps): ReactElement {
	if (props.location !== undefined) {
		return (
			<>
				{t("Docked at")} {props.location}
			</>
		);
	} else if (props.flightPlanId !== undefined) {
		return <ShipFlightStatus flightPlanId={props.flightPlanId} />;
	}

	return <>{t("Unknown")}</>;
}
