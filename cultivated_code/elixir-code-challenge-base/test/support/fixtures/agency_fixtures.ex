defmodule Car.AgencyFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Car.Agency` context.
  """

  @doc """
  Generate a rental.
  """
  def rental_fixture(attrs \\ %{}) do
    {:ok, rental} =
      attrs
      |> Enum.into(%{
        end_date: "some end_date",
        model: "some model",
        name: "some name",
        start_date: "some start_date"
      })
      |> Car.Agency.create_rental()

    rental
  end
end
