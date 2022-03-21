defmodule CarWeb.CarsControllerTest do
  use CarWeb.ConnCase

  import Car.RentalFixtures

  alias Car.Rental.Cars

  @create_attrs %{
    end_date: ~D[2022-03-20],
    model: "some model",
    name: "some name",
    start_date: ~D[2022-03-20]
  }
  @update_attrs %{
    end_date: ~D[2022-03-21],
    model: "some updated model",
    name: "some updated name",
    start_date: ~D[2022-03-21]
  }
  @invalid_attrs %{end_date: nil, model: nil, name: nil, start_date: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all cars", %{conn: conn} do
      conn = get(conn, Routes.cars_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create cars" do
    test "renders cars when data is valid", %{conn: conn} do
      conn = post(conn, Routes.cars_path(conn, :create), cars: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.cars_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "end_date" => "2022-03-20",
               "model" => "some model",
               "name" => "some name",
               "start_date" => "2022-03-20"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.cars_path(conn, :create), cars: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update cars" do
    setup [:create_cars]

    test "renders cars when data is valid", %{conn: conn, cars: %Cars{id: id} = cars} do
      conn = put(conn, Routes.cars_path(conn, :update, cars), cars: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.cars_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "end_date" => "2022-03-21",
               "model" => "some updated model",
               "name" => "some updated name",
               "start_date" => "2022-03-21"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, cars: cars} do
      conn = put(conn, Routes.cars_path(conn, :update, cars), cars: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete cars" do
    setup [:create_cars]

    test "deletes chosen cars", %{conn: conn, cars: cars} do
      conn = delete(conn, Routes.cars_path(conn, :delete, cars))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.cars_path(conn, :show, cars))
      end
    end
  end

  defp create_cars(_) do
    cars = cars_fixture()
    %{cars: cars}
  end
end
