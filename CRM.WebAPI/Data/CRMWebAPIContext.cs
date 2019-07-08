using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CRM.WebAPI.Models
{
    public class CRMWebAPIContext : DbContext
    {
        public CRMWebAPIContext(DbContextOptions<CRMWebAPIContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().HasData(new Person
            {
                ID = 1,
                Name = "Альберт",
                Surname = "Эйнштейн",
                Otch = "Германович",
                Phone = "+79270000105",
                Email = "einstein@email.com",
                Avatar = "./img/professor.png"

            }, new Person
            {
                ID=2,
                Name = "Минэко",
                Surname = "Ивасаки",
                Phone = "+79870045474",
                Email = "ivasaki@gmail.com",
                Avatar = "./img/geisha.png"
            });
            modelBuilder.Entity<Company>().HasData(
                new Company {
                    ID=3,
                    Name = "Иван",
                    Surname = "Красько",
                    Otch = "Дмитриевич",
                    Phone = "+79085547441",
                    Email = "krasko@ufnc.com",
                    Avatar = "./img/man.png",
                    CompanyName = "УФНЦ",
                    PersonPosition = "Зам. гендиректора"
                },
                new Company
                {
                    ID=4,
                    Name = "Марина",
                    Surname = "Иванова",
                    Otch = "Дмитриевна",
                    Phone = "+79085544441",
                    Email = "ivanova_marina@ufnc.com",
                    Avatar = "./img/woman.png",
                    CompanyName = "БашНефть",
                    PersonPosition = "Замначальника отдела закупок"
                }
            );
        }

        public DbSet<Client> Clients { get; set; }
    }
}
