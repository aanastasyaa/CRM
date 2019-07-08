using CRM.WebAPI.JsonConverters;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.WebAPI.Models
{
    [JsonConverter(typeof(ClientJsonConverter))]
    public abstract class Client
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [Required]
        public String Name { get; set; }
        [Required]
        public String Surname { get; set; }
        public String Otch { get; set; }
        public String Avatar { get; set; }
        [Required]
        public String Phone { get; set; }
        [Required]
        public String Email { get; set; }
    }
}
