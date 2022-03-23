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
        end_date: ~D[2022-03-22],
        model: "some model",
        name: "some name",
        start_date: ~D[2022-03-22]
      })
      |> Car.Agency.create_rental()

    rental
  end
end
