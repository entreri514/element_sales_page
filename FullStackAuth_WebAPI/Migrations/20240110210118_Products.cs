using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Products : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "0042e7a5-d883-4796-833b-81f75536eb1b", null, "Admin", "ADMIN" },
                    { "97f8614b-2a87-4f39-8823-6072bcf0f607", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0042e7a5-d883-4796-833b-81f75536eb1b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "97f8614b-2a87-4f39-8823-6072bcf0f607");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07c26922-90f2-4784-8bc7-bc4c6fb96291", null, "Admin", "ADMIN" },
                    { "8a92cff3-57cb-492b-90d4-4e88d42e2763", null, "User", "USER" }
                });
        }
    }
}
