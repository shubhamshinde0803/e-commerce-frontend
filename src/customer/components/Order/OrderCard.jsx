import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick = {() => navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://assets.ajio.com/medias/sys_master/root/20230714/Sjsm/64b18188a9b42d15c955fea9/-473Wx593H-443004374-ltgrey-MODEL.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Zip-Front Jacket with Contrast Piping</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: lt-grey</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹799</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <span>
                  <AdjustIcon
                    sx={{ width: "15px", height: "15px" }}
                    className="text-green-600 mr-2 text-sm"
                  />{" "}
                  Delivered On December 12
                </span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>
                <AdjustIcon />
                Expected Delivery:12 Dec
              </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
