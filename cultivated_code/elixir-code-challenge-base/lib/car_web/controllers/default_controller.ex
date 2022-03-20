defmodule CarWeb.DefaultController do
  use CarWeb, :controller

  def index(conn, _params) do
    text conn, "CarApi!"
  end
end