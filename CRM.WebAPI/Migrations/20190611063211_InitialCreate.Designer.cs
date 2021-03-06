﻿// <auto-generated />
using CRM.WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRM.WebAPI.Migrations
{
    [DbContext(typeof(CRMWebAPIContext))]
    [Migration("20190611063211_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CRM.WebAPI.Models.Client", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Avatar");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Otch");

                    b.Property<string>("Phone")
                        .IsRequired();

                    b.Property<string>("Surname")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Clients");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Client");
                });

            modelBuilder.Entity("CRM.WebAPI.Models.Company", b =>
                {
                    b.HasBaseType("CRM.WebAPI.Models.Client");

                    b.Property<string>("CompanyName");

                    b.Property<string>("PersonPosition");

                    b.HasDiscriminator().HasValue("Company");
                });

            modelBuilder.Entity("CRM.WebAPI.Models.Person", b =>
                {
                    b.HasBaseType("CRM.WebAPI.Models.Client");

                    b.HasDiscriminator().HasValue("Person");
                });
#pragma warning restore 612, 618
        }
    }
}
