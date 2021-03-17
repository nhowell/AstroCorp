import { useQuery } from "react-query";
import { GAME_PATH, GAME_QUERY_KEY } from ".";
import { unauthenticatedSpaceTradersApi } from "..";
import { IError } from "../types";

export function useGameStatus() {
	const query = useQuery<string, IError>(
		[GAME_QUERY_KEY, "status"],
		getGameStatus,
		{
			staleTime: 15_000,
			refetchInterval: 15_000,
		},
	);

	return query;
}

async function getGameStatus() {
	const response = await unauthenticatedSpaceTradersApi.get<ISuccessResponse>(
		`${GAME_PATH}/status`,
	);
	return response.data.status;
}

interface ISuccessResponse {
	status: string;
}
