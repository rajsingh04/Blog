import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ childern, authentication = true }) => {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	const authStatus = useSelector((state) => state.auth.status);
	console.log(authStatus, authentication);
	useEffect(() => {
		if (authentication && authStatus !== authentication) {
			navigate("/login");
		} else if (!authentication && authStatus !== authentication) {
			navigate("/");
		} else {
			setLoader(false);
		}
		setLoader(false);
	}, [authStatus, navigate, authentication]);
	return loader ? <h1>Loading ...</h1> : <>{childern}</>;
};

export default Protected;
