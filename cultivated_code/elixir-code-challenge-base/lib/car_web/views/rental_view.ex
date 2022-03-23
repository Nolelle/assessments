defmodule CarWeb.RentalView do
  use CarWeb, :view
  alias CarWeb.RentalView

  def render("index.json", %{rentals: rentals}) do
    %{data: render_many(rentals, RentalView, "rental.json")}
  end

  def render("show.json", %{rental: rental}) do
    %{data: render_one(rental, RentalView, "rental.json")}
  end

  def render("rental.json", %{rental: rental}) do
    %{
      id: rental.id,
      name: rental.name,
      model: rental.model,
      start_date: rental.start_date,
      end_date: rental.end_date
    }
  end
end
