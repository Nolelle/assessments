defmodule CarWeb.CarsView do
  use CarWeb, :view
  alias CarWeb.CarsView

  def render("index.json", %{cars: cars}) do
    %{data: render_many(cars, CarsView, "cars.json")}
  end

  def render("show.json", %{cars: cars}) do
    %{data: render_one(cars, CarsView, "cars.json")}
  end

  def render("cars.json", %{cars: cars}) do
    %{
      id: cars.id,
      name: cars.name,
      model: cars.model,
      start_date: cars.start_date,
      end_date: cars.end_date
    }
  end
end
