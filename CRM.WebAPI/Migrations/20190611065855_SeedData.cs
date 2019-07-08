using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM.WebAPI.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ID", "Avatar", "Discriminator", "Email", "Name", "Otch", "Phone", "Surname", "CompanyName", "PersonPosition" },
                values: new object[,]
                {
                    { 3, "./img/man.png", "Company", "krasko@ufnc.com", "Иван", "Дмитриевич", "+79085547441", "Красько", "УФНЦ", "Зам. гендиректора" },
                    { 4, "./img/woman.png", "Company", "ivanova_marina@ufnc.com", "Марина", "Дмитриевна", "+79085544441", "Иванова", "БашНефть", "Замначальника отдела закупок" }
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ID", "Avatar", "Discriminator", "Email", "Name", "Otch", "Phone", "Surname" },
                values: new object[,]
                {
                    { 1, "./img/professor.png", "Person", "einstein@email.com", "Альберт", "Германович", "+79270000105", "Эйнштейн" },
                    { 2, "./img/geisha.png", "Person", "ivasaki@gmail.com", "Минэко", null, "+79870045474", "Ивасаки" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Clients",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Clients",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Clients",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Clients",
                keyColumn: "ID",
                keyValue: 2);
        }
    }
}
