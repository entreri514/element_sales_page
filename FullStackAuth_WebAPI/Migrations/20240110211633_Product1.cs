using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Product1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2fc5d07d-f765-43e6-8e54-5b273abf10b2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "86be3056-f113-47ec-b824-26942036e264");

            migrationBuilder.AddColumn<string>(
                name: "BoilingPoint",
                table: "Products",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Density",
                table: "Products",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MeltingPoint",
                table: "Products",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Products",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Symbol",
                table: "Products",
                type: "longtext",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3617ace0-6073-4cc7-b11e-a4b3fe60fa53", null, "User", "USER" },
                    { "47f761b5-1df6-42dd-8d47-ff275491cf7a", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3617ace0-6073-4cc7-b11e-a4b3fe60fa53");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47f761b5-1df6-42dd-8d47-ff275491cf7a");

            migrationBuilder.DropColumn(
                name: "BoilingPoint",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Density",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "MeltingPoint",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Symbol",
                table: "Products");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2fc5d07d-f765-43e6-8e54-5b273abf10b2", null, "Admin", "ADMIN" },
                    { "86be3056-f113-47ec-b824-26942036e264", null, "User", "USER" }
                });
        }
    }
}
