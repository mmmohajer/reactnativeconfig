import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getStoreData } from "Utils/auth";
import { TOKEN_SPACE_WORD } from "Constants/vars";
import { isLoading, isLoaded } from "Reducers/general/loading";
import { showErrorAPIAlert } from "Utils/notifications";
import { API_BASE_URL } from "Root/config";

const useApiCalls = ({
  sendReq,
  setSendReq,
  method,
  url,
  bodyData,
  headers,
  useDefaultHeaders = true,
  showLoading = true,
  closeLoading = true,
  showErrorMessage = true,
}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      url = `${API_BASE_URL}${url}`;
      const accessToken = await getStoreData("access_token");
      if (useDefaultHeaders && accessToken) {
        if (!headers) {
          headers = { Authorization: `${TOKEN_SPACE_WORD} ${accessToken}` };
        } else {
          headers["Authorization"] = `${TOKEN_SPACE_WORD} ${accessToken}`;
        }
      }
      console.log(url);
      try {
        let res;
        if (showLoading) {
          dispatch(isLoading());
        }
        if (method.toLowerCase() === "get") {
          res = await axios.get(url, headers && { headers });
        } else if (method.toLowerCase() === "post") {
          res = await axios.post(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "put") {
          res = await axios.put(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "patch") {
          res = await axios.patch(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "delete") {
          res = await axios.delete(url, headers && { headers });
        }
        if (res?.data) {
          setData(res.data);
        }
        if (showLoading && closeLoading) {
          dispatch(isLoaded());
        }
      } catch (err) {
        setError(err.response);
        if (showLoading) {
          dispatch(isLoaded());
        }
        if (showErrorMessage) {
          showErrorAPIAlert(err.response, dispatch);
        }
      }
      setSendReq(false);
    };
    if (sendReq) {
      sendRequest();
    }
  }, [sendReq]);
  return { data, error };
};

export default useApiCalls;
