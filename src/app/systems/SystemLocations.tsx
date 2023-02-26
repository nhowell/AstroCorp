import { ReactElement } from "react";

import { useLocationsInSystem } from "@/spacetraders-api/hooks/systems/useLocationsInSystem";
import { t } from "@/utils/translate";

import { QueryResultHandler } from "../common/QueryResultHandler";
import { Tile } from "../common/tiles/Tile";
import { TileContainer } from "../common/tiles/TileContainer";
import { generateViewLocationPath } from "../routes";

import { SystemLocation } from "./SystemLocation";

interface IOwnProps {
	systemSymbol: string;
}

export function SystemLocations(props: IOwnProps): ReactElement {
	const result = useLocationsInSystem(props.systemSymbol);

	return (
		<QueryResultHandler queryResult={result}>
			{(data) =>
				data.locations.length === 0 ? (
					<p>{t("There are no locations.")}</p>
				) : (
					<TileContainer>
						{data.locations.map((location) => (
							<Tile
								key={location.symbol}
								width="28.5rem"
								linkTo={generateViewLocationPath(location.symbol)}
							>
								<SystemLocation location={location} />
							</Tile>
						))}
					</TileContainer>
				)
			}
		</QueryResultHandler>
	);
}
