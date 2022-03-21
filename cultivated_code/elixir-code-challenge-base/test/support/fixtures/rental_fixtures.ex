defmodule Car.RentalFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Car.Rental` context.
  """

  @doc """
  Generate a cars.
  """
  def cars_fixture(attrs \\ %{}) do
    {:ok, cars} =
      attrs
      |> Enum.into(%{
         name: "some  name",
        end_date: ~D[2022-03-20],
        model: "some model",
        start_date: ~D[2022-03-20]
      })
      |> Car.Rental.create_cars()

    cars
  end
end
