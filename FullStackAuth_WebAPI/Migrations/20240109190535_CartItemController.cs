using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class CartItemController : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9cc978f3-6241-46e3-a965-20b1b9adc196");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d214d018-f373-4e4c-9370-a60f3f887020");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a281283f-5670-4b7a-bf27-7ec5908c0e4b", null, "User", "USER" },
                    { "bd1ec357-ff14-47f4-a7c2-7d3bdfc4094f", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "9cc978f3-6241-46e3-a965-20b1b9adc196", null, "Admin", "ADMIN" },
                    { "d214d018-f373-4e4c-9370-a60f3f887020", null, "User", "USER" }
                });
        }
    }
}
