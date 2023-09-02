import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";
import axios from "axios";

export const PerfilPage = () => {
  const params = useParams();
  const [user] = useContext(UserContext);
  const { id } = params;
  console.log(user)

  const [perfil, setPerfil] = useState(null);
/*   useEffect(() => {
    const getPerfil = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/users/perfil/${id}`
        );
        setPerfil(data.detail);
        console.log(perfil);
      } catch (error) {
        console.log(error);
      }
    };
    getPerfil();
  }, []); */
  return (
    <>
      <div>
        <div>
          <img src="" alt="imagen del Usuario" />
        </div>
        
        <div>
        <span>{user ? user.user.username : null}</span>
        <span>{user ? user.user.lastname : null}</span>
        <span>{user ? user.user.email : null}</span>

        </div>
      </div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sint
      eaque nam dolore in odit animi numquam illo error laboriosam voluptas,
      laudantium dolor. Minus eius, veniam delectus reiciendis vitae culpa Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Est iusto neque ipsa
      dolor repellat error aperiam delectus omnis adipisci reprehenderit,
      excepturi ex laboriosam, beatae quos incidunt alias voluptate? Laborum,
      vitae. t quo eveniet laboriosam ipsum ipsam amet, inventore reprehenderit.
      Id dolorem alias veniam ut neque ad maxime non saepe optio harum, labore
      temporibus. Libero sed nesciunt quas? Minus quo nihil excepturi quibusdam,
      sit earum autem unde nostrum assumenda iusto nam sequi tempora, delectus
      accusantium, consectetur vero officiis doloribus tempore itaque alias
      error distinctio! Eius magnam nostrum laudantium nulla eveniet architecto
      provident esse molestias mollitia corrupti? Minima provident possimus ipsa
      blanditiis consequatur temporibus dolorem incidunt. Aliquam molestiae
      libero nobis odit rem similique itaque harum! Eum cumque saepe, obcaecati
      explicabo dolore nihil praesentium laboriosam aspernatur labore corrupti
      voluptatem fuga! Minus et saepe eligendi aliquam eius possimus distinctio,
      id aut quisquam voluptatem similique illum tenetur modi. Officia ratione
      minus numquam laudantium. Animi illum, eum ratione tempora error ipsam
      assumenda explicabo. Assumenda error dolor reiciendis, alias, ad
      dignissimos perferendis quo pot iure quas sequi et quis minus accusamus.{" "}
    </>
  );
};
