using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class ProductUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a281283f-5670-4b7a-bf27-7ec5908c0e4b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd1ec357-ff14-47f4-a7c2-7d3bdfc4094f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07c26922-90f2-4784-8bc7-bc4c6fb96291", null, "Admin", "ADMIN" },
                    { "8a92cff3-57cb-492b-90d4-4e88d42e2763", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07c26922-90f2-4784-8bc7-bc4c6fb96291");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8a92cff3-57cb-492b-90d4-4e88d42e2763");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a281283f-5670-4b7a-bf27-7ec5908c0e4b", null, "User", "USER" },
                    { "bd1ec357-ff14-47f4-a7c2-7d3bdfc4094f", null, "Admin", "ADMIN" }
                });
        }
    }
}
