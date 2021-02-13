import { Dispatch, SetStateAction } from "react";

export interface Props {
	data: string;
	setData: Dispatch<SetStateAction<string>>;
}
