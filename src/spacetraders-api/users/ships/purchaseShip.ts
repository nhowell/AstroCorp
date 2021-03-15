import { useMutation } from "react-query";
import { currentUserPath } from "..";
import { spaceTradersApi } from "../..";
import { IGetUserInfoResponse, setUserInfoQueryData } from "../getUserInfo";
import { IUser } from "../types";

export function usePurchaseShip() {
	return useMutation<IUser, string, IPurchaseShipRequest>(purchaseShip, {
		onSuccess: (data) => {
			// Since purchasing a ship returns the entire user object, we can update
			// the user query with the new data to prevent an extra query.
			setUserInfoQueryData(data);
		},
	});
}

interface IPurchaseShipRequest {
	username: string;
	location: string;
	type: string;
}

async function purchaseShip({ username, ...payload }: IPurchaseShipRequest) {
	const response = await spaceTradersApi.post<IGetUserInfoResponse>(
		`${currentUserPath(username)}/ships`,
		payload,
	);
	return response.data.user;
}
