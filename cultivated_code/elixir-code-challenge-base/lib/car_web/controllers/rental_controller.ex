defmodule CarWeb.RentalController do
  use CarWeb, :controller

  alias Car.Agency
  alias Car.Agency.Rental

  action_fallback CarWeb.FallbackController

  def index(conn, _params) do
    rentals = Agency.list_rentals()
    render(conn, "index.json", rentals: rentals)
  end

  def create(conn, %{"rental" => rental_params}) do
    with {:ok, %Rental{} = rental} <- Agency.create_rental(rental_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.rental_path(conn, :show, rental))
      |> render("show.json", rental: rental)
    end
  end

  def show(conn, %{"id" => id}) do
    rental = Agency.get_rental!(id)
    render(conn, "show.json", rental: rental)
  end

  def update(conn, %{"id" => id, "rental" => rental_params}) do
    rental = Agency.get_rental!(id)

    with {:ok, %Rental{} = rental} <- Agency.update_rental(rental, rental_params) do
      render(conn, "show.json", rental: rental)
    end
  end

  def delete(conn, %{"id" => id}) do
    rental = Agency.get_rental!(id)

    with {:ok, %Rental{}} <- Agency.delete_rental(rental) do
      send_resp(conn, :no_content, "")
    end
  end
end
